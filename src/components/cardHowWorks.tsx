interface CardHowWorksProps {
    number: string;
    icon: string;
    title: string;
    description: string;
}

export function CardHowWorks({ number, title, description, icon }: CardHowWorksProps) {
    return (
        <div
          className="group max-w-md cursor-pointer bg-white rounded-xl shadow-md 
               hover:shadow-lg transition-transform duration-300 hover:scale-105 relative"
        >
          <div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                    w-15 h-15 flex items-center justify-center rounded-full  bg-white"
          >
            <div
              className="absolute left-1/2 transform -translate-x-1/2 
                    w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#0074C1] bg-white shadow"
            >
              <span className="text-[#0074C1] text-lg font-semibold">{number}</span>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10 pb-6 px-3">
            <div>
                {icon}
            </div>
            <h3 className="font-semibold text-lg mb-1 text-[#272343] group-hover:text-[#0074C1] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mb-3 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
    );
}