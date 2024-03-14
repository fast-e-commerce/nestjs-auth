import { Body, Controller, Post, Request, Get } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { Public } from 'src/auth/decorators/auth/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
