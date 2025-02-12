import { createParamDecorator } from '@nestjs/common';
import { User } from '@prisma/client';

export const CurrentUser = createParamDecorator(
(   data: keyof User,ctx:ExecutionContext) => {
        const requiest
    };
)
