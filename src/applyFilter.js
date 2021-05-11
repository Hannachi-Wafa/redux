const applyFilter = (todos,filter) => {
    switch (filter) {
  
      case 'SHOW_ALL':
      return todos;
  
      case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.isDone
      );
  
      case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.isDone
      );
  
      default:
      return todos;
    };
  };
  export default applyFilter