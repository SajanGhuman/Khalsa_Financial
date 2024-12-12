function Circle({ className, width, height, fill = true, ...props }) {
  return (
    <div
      className={`absolute ${className} ${"bg-[#193838]"} rounded-full`}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    ></div>
  );
}

export default Circle;
