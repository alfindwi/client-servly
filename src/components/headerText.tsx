interface HeaderTextProps {
    title: string;
    description: string;
    className?: string
}

export function HeaderText({ title, description, className }: HeaderTextProps) {
  return (
    <>
      <h2 data-aos="fade-up" className={className} >
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
