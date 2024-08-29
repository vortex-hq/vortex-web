import { Profile } from '@/api/profile';

abstract class ApiRequest<T> {
  protected readonly url: string = 'http://127.0.0.1:8000';
  protected token?: string;

  constructor(token?: string) {
    this.token = token;
  }
  private buildHeaders(includeAuth: boolean): HeadersInit {
    const headers: HeadersInit = {
      'content-type': 'application/json',
    };
    if (includeAuth && this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  protected async get(
    endpoint: string,
    tag: string,
    includeAuth: boolean = true,
  ): Promise<T> {
    const response = await fetch(`${this.url}${endpoint}`, {
      method: 'GET',
      headers: this.buildHeaders(includeAuth),
      next: { tags: [tag] },
      cache: 'force-cache',
    });
    return response.json();
  }

  // protected async search(query: string, type: string): Promise<T> {
  //   const response = await fetch(`${this.url}/search?q=${query}&type=${type}`, {
  //     method: 'GET',
  //     headers: this.buildHeaders(false),
  //     next: { tags: ['search'] },
  //     cache: 'force-cache',
  //   });
  //   return response.json();
  // }
}

export class UserRequest extends ApiRequest<Profile> {
  async getProfile(): Promise<Profile> {
    return this.get('/users/me', 'user-profile');
  }
}
