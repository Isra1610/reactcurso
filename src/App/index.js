import TodoList from "../TodoList/index.js";
import TodoItem from "../TodoItem/index.js";
import CreateTodoButton from "../CreateTodoButton/index.js";
import useTodos from "./useTodos.js";
import Modal from "../Modal/index.js";
import TodoForm from "../TodoForm/index.js";
import TodoCounter from "../TodoCounter/index.js";
import TodoSearch from "../TodoSearch/index.js";
import TodoHeader from "../TodoHeader/index.js";
import TodoError from "../TodoError/index.js";
import TodoEmpty from "../TodoEmpty/index.js";
import TodoLoading from "../TodoLoading/index.js";

import "./App.css";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        {
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        }
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty />}
        onEmptySearchResults={(searchText) => (
          <p>Not Founds for {searchText}...</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodos(todo.text)}
            onComplete={() => completeTodos(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <p>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </p>
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
