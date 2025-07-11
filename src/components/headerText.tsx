interface HeaderTextProps {
    title: string;
    description: string;
}

export function HeaderText({ title, description }: HeaderTextProps) {
  return (
    <>
      <h2 data-aos="fade-up" className="text-3xl text-[#272343] md:text-4xl font-bold">
        {title}
      </h2>
      <p
        data-aos="fade-up"
        className="text-gray-600 text-sm mt-2 mb-8 max-w-2xl mx-auto"
      >
        {description}
      </p>
    </>
  );
}
