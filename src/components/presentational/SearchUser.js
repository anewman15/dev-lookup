const SearchUser = () => {
  const text = 'Search';
  return (
    <div>
      <h1>Look up a developer on GitHub</h1>
      <form>
        <input type="text" />
        <button type="submit">{text}</button>
      </form>
    </div>
  );
};

export default SearchUser;
