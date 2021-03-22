class Github {
  constructor() {
    this.client_id = '42ea369d7cf12de8bae9';
    this.client_secret = 'a4ce42f89611b6af22fe34da4817cd1dc9e29cf4';
    this.repo_sort = 'created: asc';
    this.repos_count = 5;
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secreat=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secreat=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
