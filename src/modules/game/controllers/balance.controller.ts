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
import { VerifySwapReqDto, VerifyUpdateReqDto } from '../dto/balance.req.dto';
import { VerifySwapResDto, VerifyUpdateResDto } from '../dto/balance.res.dto';
import Request from '../helpers/request.helper';
import { Signature } from 'ethers';

@Controller('/balance')
export class BalanceController {
  @Post('/verify-swap')
  async verifySwap(
    @Body() reqDto: VerifySwapReqDto
  ): Promise<VerifySwapResDto> {
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
        // Sell
        const gameBackendVerification = await axios.post(
          `${configuration().marsdoge}/verify/swap-game-point`,
          {
            address: reqDto.requester,
            amount: reqDto.amount,
          }
        );
        if (
          !gameBackendVerification ||
          gameBackendVerification.data.result !== RetCode.Success
        ) {
          throw new HttpException(
            {
              message: {
                code: RetCode.Failed,
                message: 'Marsdoge backend verification has been failed',
              },
            },
            HttpStatus.OK
          );
        }
      } else {
        // Buy
        const balance = await axios.post(
          `${configuration().marsdoge}/balance`,
          {
            address: reqDto.requester,
          }
        );
        if (!balance || balance.data.result !== RetCode.Success) {
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
        const totalAmount =
          Number(balance.data.data.balance) + Number(reqDto.amount);
        if (totalAmount >= 2147483647 - 1) {
          throw new HttpException(
            {
              message: {
                code: RetCode.ExceedInt32,
                message: 'Expected balance exceeds Int32 limit value',
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
        configuration().chainId,
        `0x${configuration().privateKey}`,
        configuration().swapContract
      );
      return {
        v: signature.v,
        r: signature.r,
        s: signature.s,
      };
    } catch (err) {
      if (err.message === 'Http Exception') throw err;
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

  @Post('/verify-update')
  async verifyUpdate(
    @Body() reqDto: VerifyUpdateReqDto
  ): Promise<VerifyUpdateResDto> {
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
        configuration().chainId,
        `0x${configuration().privateKey}`,
        configuration().swapContract
      );
      return {
        v: signature.v,
        r: signature.r,
        s: signature.s,
      };
    } catch (err) {
      if (err.message === 'Http Exception') throw err;
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
