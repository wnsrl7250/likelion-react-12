import Child from './child';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function Parent({ message, setMessage }: Props) {
  return (
    <div className="flex-1 p-5 border-4 rounded-full flex justify-center">
      <Child message={message} setMessage={setMessage} />
    </div>
  );
}

export default Parent;
