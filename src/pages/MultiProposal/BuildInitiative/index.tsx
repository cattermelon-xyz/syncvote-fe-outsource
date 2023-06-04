import React from 'react';
import PAGE_ROUTES from '@utils/constants/pageRoutes';
import { Link, useNavigate } from 'react-router-dom';
import { L } from '@utils/locales/L';
import { useDispatch } from 'react-redux';
import { checkNode } from '@redux/reducers/check-node.reducer';

type Props = {};

const BuildInitiative = (props: Props) => {
  console.log('hgello fen');
  const navigate = useNavigate();

  const handleNavigate = () => {
    const { ROOT, WF_TEMPLATES } = PAGE_ROUTES.WORKFLOW;
    const path = `/${ROOT}/${WF_TEMPLATES}`;
    console.log({ path });
    navigate(path, { state: { previousPath: `/${PAGE_ROUTES.INITIATIVE.ROOT}` } });
  };

  const dispatch = useDispatch();
  dispatch(checkNode.actions.resetStore());

  return (
    <div className="container w-full flex justify-center">
      <div className="w-2/3 flex flex-col gap-8  mt-[5%]">
        <p className="text-[#252422] text-[28px] font-semibold">
          Select
          <span className="text-violet-version-5 italic"> a workflow </span>
          to apply
        </p>
        <div className="flex flex-col gap-4 my-2 w-full border rounded-lg p-6 text-[#575655]">
          <Link to={`/${PAGE_ROUTES.INITIATIVE.ROOT}/${PAGE_ROUTES.INITIATIVE.REVIEW_CHECKPOINT}`}>
            <div className="flex justify-between items-center cursor-pointer py-2">
              <p className="text-[17px] truncate">Decision making for hiring</p>
              <p className="text-[13px]">Created on January 1st, 2023</p>
            </div>
          </Link>
          <div className="border-b border-primary_logo w-full" />
          <Link to={`/${PAGE_ROUTES.INITIATIVE.ROOT}/${PAGE_ROUTES.INITIATIVE.REVIEW_CHECKPOINT}`}>
            <div className="flex justify-between cursor-pointer py-2">
              <p className="text-[17px] truncate">Decision making for accessing deals</p>
              <p className="text-[13px]">Created on Dec 12th, 2022</p>
            </div>
          </Link>
          <div className="border-b border-primary_logo w-full" />
          <Link to={`/${PAGE_ROUTES.INITIATIVE.ROOT}/${PAGE_ROUTES.INITIATIVE.REVIEW_CHECKPOINT}`}>
            <div className="flex justify-between cursor-pointer py-2">
              <p className="text-[17px] truncate">Decision making for rewarding...</p>
              <p className="text-[13px]">Created on Dec 8th, 2022</p>
            </div>
          </Link>
          <div
            className="py-2 text-center text-[#5D23BB] cursor-pointer text-base font-medium"
            onClick={handleNavigate}
          >
            {L('exploreBlueprintsInTheTemplateLibrary')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildInitiative;
