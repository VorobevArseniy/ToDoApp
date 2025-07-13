interface TodoComponentTextInterface {
	text: string | undefined;
}

const TodoComponentText = ({ text }: TodoComponentTextInterface) => {
	return <div>{text || "Нажми на любую задачу!"}</div>;
};

export default TodoComponentText;
