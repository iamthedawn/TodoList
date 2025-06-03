import { Button, Card, Input } from "antd";
import "./TodoList.scss";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState(
    localStorage.getItem("list").split(",")
  );
  const [item, setItem] = useState("");

  const handleAddItem = () => {
    localStorage.setItem("list", [...todoItems, item]);
    setTodoItems((prev) => [...prev, item]);
  };

  const handleRemoveItem = (idx) => {
    let newArr = [...todoItems];
    setTodoItems(
      newArr.filter((_, index) => {
        return index != idx;
      })
    );
    localStorage.setItem(
      "list",
      newArr.filter((_, index) => {
        return index != idx;
      })
    );
  };

  return (
    <div className="todoContainer">
      <div className="addItemContainer">
        <Input
          className="inputBar"
          placeholder="Enter To Do Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleAddItem();
            }
          }}
        />
        <Button
          className="addBtn"
          type="primary"
          onClick={() => handleAddItem()}
        >
          Add
        </Button>
      </div>
      <div className="todoItemsContainer">
        {todoItems?.map((item, idx) => {
          return (
            <Card
              key={idx}
              size="small"
              title={`Todo Item`}
              extra={<DeleteOutlined onClick={() => handleRemoveItem(idx)} />}
              style={{ width: 200 }}
            >
              <p>{item}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
