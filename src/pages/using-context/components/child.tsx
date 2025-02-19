import GrandChild from './grand-child';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function Child({ message, setMessage }: Props) {
  return (
    <div className="flex-1 p-5 border-4 rounded-full flex justify-center">
      <GrandChild message={message} setMessage={setMessage} />
    </div>
  );
}

export default Child;
