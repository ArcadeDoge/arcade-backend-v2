import axios from 'axios';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { configuration } from 'src/config/default.config';
import RetCode from 'src/constants/retcode';
import { VerifySwapReqDto } from '../dto/balance.req.dto';
import { VerifySwapResDto } from '../dto/balance.res.dto';
import Request from '../helpers/request.helper';
import { Signature } from 'ethers';

@Controller('/balance')
export class BalanceController {
  @Post('/verify-swap')
  async verify(@Body() reqDto: VerifySwapReqDto): Promise<VerifySwapResDto> {
    try {
      if (reqDto.gameId !== 1) {
        throw new HttpException(
          {
            message: {
              code: RetCode.Failed,
              message: 'Only marsdoge supports this request',
            },
          },
          HttpStatus.OK
        );
      }
      if (reqDto.swapType === 1) {
        const gameBackendVerification = await axios.post(
          `${configuration().marsdoge}/verify/swap-game-point`,
          {
            address: reqDto.requester,
            amount: reqDto.amount,
          }
        );
        if (
          !gameBackendVerification ||
          gameBackendVerification.data.result != RetCode.Success
        ) {
          throw new HttpException(
            {
              message: {
                code: RetCode.Failed,
                message: 'Marsdoge verification failed',
              },
            },
            HttpStatus.OK
          );
        }
      }

      console.log(
        'signer',
        configuration().signer,
        reqDto.requester,
        reqDto.gcToken,
        reqDto.gameId,
        reqDto.amount.toString()
      );

      const request: Request = new Request(
        configuration().signer,
        reqDto.requester,
        reqDto.gcToken,
        reqDto.gameId,
        reqDto.amount.toString()
      );
      const signature: Signature = await request.sign(
        `0x${configuration().privateKey}`,
        configuration().swapContract
      );
      return {
        v: signature.v,
        r: signature.r,
        s: signature.s,
      };
    } catch (err) {
      console.log('err', err);
      throw new HttpException(
        {
          message: {
            code: RetCode.Failed,
            message: err.message,
          },
        },
        HttpStatus.OK
      );
    }
  }
}
