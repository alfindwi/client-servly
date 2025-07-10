interface ChooseUsProps {
  number: string;
  title: string;
  description: string;
}

export function ChooceComponent({ number, title, description }: ChooseUsProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#272343] font-bold">{number}</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
