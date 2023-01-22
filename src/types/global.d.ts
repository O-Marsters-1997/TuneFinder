interface IAuth {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
  authEndPoint: string;
  responseType: string;
  state?: string;
  scope?: string;
  token?: string;
}

type AuthParams = IAuth | undefined;
