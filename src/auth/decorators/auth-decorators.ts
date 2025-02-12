import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(data: keyof UserActivation,ctx:ExecutionContext) => {
    const requiest
};
