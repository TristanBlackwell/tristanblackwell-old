import { useState } from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function Project() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="relative bg-slight-blue flex flex-col-reverse rounded-md h-60 projectCard">
      <div>
        <div
          className={
            " top-5 right-3 projectCross z-50 " +
            (showDetail ? "projectCrossOpen" : "projectCrossClosed")
          }
          onClick={() => {
            setShowDetail(!showDetail);
          }}
        />
      </div>
      <div
        className={
          "px-3 py-2 absolute bottom-0 left-0 right-0 overflow-hidden w-100 h-16 projectDetail " +
          (showDetail && "projectDetailOpen")
        }
      >
        <p className="text-md font-bold">
          This is the project name
          <span className="text-xs font-light text-gray-300 pl-3">
            July 2020
          </span>
        </p>
        <div className="flex mt-1">
          <a href="/external-link">
            <ExternalLinkIcon className="h-6 w-6 mr-3" />
          </a>
          <a href="/code">
            <CodeIcon className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-3 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
}
