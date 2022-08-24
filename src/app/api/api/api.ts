export * from './authenticate.service';
import { AuthenticateService } from './authenticate.service';
export * from './post.service';
import { PostService } from './post.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AuthenticateService, PostService, UserService];
