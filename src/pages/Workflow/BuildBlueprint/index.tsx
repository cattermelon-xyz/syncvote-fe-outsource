import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import PAGE_ROUTES from '@utils/constants/pageRoutes';

type Props = {};

const BuildBlueprint = (props: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const { ROOT, WF_TEMPLATES } = PAGE_ROUTES.WORKFLOW;
    const path = `/${ROOT}/${WF_TEMPLATES}`;
    navigate(path, {
      state: {
        previousPath: `/${PAGE_ROUTES.WORKFLOW.ROOT}/${PAGE_ROUTES.WORKFLOW.SELECT_TEMPLATE}`,
      },
    });
  };

  return (
    <div className="container w-full flex justify-center">
      <div className="w-2/3 flex flex-col gap-8 items-center mt-[5%]">
        <p className="text-[#252422] text-[28px] font-semibold">
          Build
          <span className="text-violet-version-5"> workflow </span>
          with template
        </p>
        <div className="flex flex-col gap-8 my-2 w-full border rounded-lg p-6 text-[#575655]">
          <div className="flex justify-between items-center">
            <p className="text-[17px] truncate">
              Investment deals evaluation process for Investmen...
            </p>
            <p className="text-[13px]">Created on January 1st, 2023</p>
          </div>
          <div className="border-b border-primary_logo w-full" />
          <div className="flex justify-between">
            <p className="text-[17px]">DAO contributors recruitment process</p>
            <p className="text-[13px]">Created on Dec 12th, 2022</p>
          </div>
          <div className="border-b border-primary_logo w-full" />
          <div className="flex justify-between">
            <p className="text-[17px]">Procurement competitive bidding process</p>
            <p className="text-[13px]">Created on Dec 8th, 2022</p>
          </div>
          {/* <Link to={`/${PAGE_ROUTES.VIEW_BLUEPRINT_TEMPLATES}`}> */}

          <div
            className="text-center text-violet-version-5 text-[17px] cursor-pointer"
            onClick={handleNavigate}
          >
            View all templates in library
          </div>
          {/* </Link> */}
        </div>
        <Link
          to={`/${PAGE_ROUTES.WORKFLOW.ROOT}/${PAGE_ROUTES.WORKFLOW.SET_NAME}`}
          className="w-full"
        >
          <Button className="w-full text-[17px] py-[18px] font-medium tracking-0.5px">
            Build a new workflow
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BuildBlueprint;
