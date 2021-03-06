const fetchUserRepos = async args => {
  try {
    args.setIsLoading(true);
    const response = await fetch(args.uri, {
      org: `${args.username}`,
    });
    const data = await response.json();
    if (data instanceof Array) {
      if (data.length) {
        args.saveUserRepos(data);
        args.setNoReposAvailable(false);
        args.setNotFound(false);
        args.setError(false);
        args.setIsLoading(false);
      }
      if (data.length === 0) {
        args.setNoReposAvailable(true);
        args.saveUserRepos([]);
        args.setNotFound(false);
        args.setError(false);
        args.setIsLoading(false);
      }
    }
    if (data && data.message === 'Not Found') {
      args.setNotFound(true);
      args.saveUserRepos([]);
      args.setNoReposAvailable(false);
      args.setError(false);
      args.setIsLoading(false);
    }
  } catch {
    args.setError(true);
    args.saveUserRepos([]);
    args.setNotFound(false);
    args.setNoReposAvailable(false);
    args.setIsLoading(false);
  }
};

const fetchRepoDetails = async args => {
  try {
    args.setIsLoading(true);
    const response = await fetch(args.uri);
    const data = await response.json();
    if (data instanceof Object && data.id) {
      args.setRepoDetails(data);
      args.setError(false);
      args.setIsLoading(false);
    }
  } catch {
    args.setError(true);
    args.setRepoDetails({});
    args.setIsLoading(false);
  }
};

export { fetchUserRepos, fetchRepoDetails };
