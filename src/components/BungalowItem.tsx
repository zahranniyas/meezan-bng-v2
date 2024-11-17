interface Props {
  name: string;
  desc: string;
  img: string;
  link: string;
  addCSS?: string;
}

const BungalowItem = ({ name, desc, img, link, addCSS }: Props) => {
  return (
    <div className={`relative ${addCSS}`}>
      <img
        src={img}
        alt="bungalow01"
        className=" relative z-20 rounded-t-xl w-[290px]"
      />
      <div
        id="bungItem"
        className=" relative z-10 rounded-b-xl bg-white border-[1px] border-t-0 border-[#b5b5b5] text-black w-[290px] h-[147px] p-3 flex flex-col justify-between items-start"
      >
        <div>
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="text-[12px] font-quicksand font-thin">{desc}</p>
        </div>
        <a
          href={link}
          className="bg-[#373225] text-white px-2 pb-[4px] pt-[6px]  text-xs rounded-md hover:bg-[#59513c] transition-all"
        >
          Visit Page
        </a>
      </div>
    </div>
  );
};

export default BungalowItem;
