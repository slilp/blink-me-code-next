import { PortCard, FullPortCard } from "components/organisms";
import portfolios from "config/portfolios";
import { PortfolioType } from "utils/enum";
import { FaRegGrinBeamSweat } from "react-icons/fa";

interface ContentProp {
  search: PortfolioType;
}

const Content = ({ search = PortfolioType.FULL }: ContentProp) => {
  const data = portfolios.filter((port) => port.type === search);

  if (data.length === 0)
    return (
      <div className="flex items-center justify-center h-96 text-3xl font-bold gap-3">
        <FaRegGrinBeamSweat></FaRegGrinBeamSweat>NOT FOUND
      </div>
    );

  return (
    <>
      {data.map((item) =>
        item.type === PortfolioType.MINI ? (
          <PortCard
            key={`portfolio-code-${item.id}`}
            id={`portfolio-code-${item.id}`}
            title={item.title}
            tags={item.tags}
            desc={item.desc}
            pic={`/portfolio/${item.pic}`}
            url={item.link}
            link={item.link}
          />
        ) : (
          <FullPortCard
            key={`portfolio-code-${item.id}`}
            id={`portfolio-code-${item.id}`}
            title={item.title}
            tags={item.tags}
            desc={item.desc}
            pic={`/portfolio/${item.pic}`}
            fromColor={item.fromColor || "black"}
            toColor={item.toColor || "black"}
            link={item.link}
            details={item.detail}
            git={item.git}
          />
        )
      )}
    </>
  );
};

export default Content;
