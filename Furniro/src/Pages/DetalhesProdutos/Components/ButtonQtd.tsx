interface ButtonQtdProps {
  width: string;
  height: string;
  quantidade: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ButtonQtd: React.FC<ButtonQtdProps> = ({ width, height, quantidade, onIncrement, onDecrement }) => {
  
  return (
    <div style={{ width, height }} className="flex items-center justify-center border rounded-md">
      <button 
        onClick={onDecrement} 
        className="text-gray-600 text-2xl font-bold hover:text-gray-800 transition">
        -
      </button>
      <span className="px-4">{quantidade}</span>
      <button 
        onClick={onIncrement} 
        className="text-gray-600 text-2xl font-bold hover:text-gray-800 transition">
        +
      </button>
    </div>
  );
};

export default ButtonQtd;
