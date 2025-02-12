import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const auth = () => UseGuards(AuthGuard('jwt'));
