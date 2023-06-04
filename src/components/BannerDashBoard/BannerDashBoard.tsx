/* eslint-disable max-len */
import React, { useState } from 'react';
import ArrowDown from '@assets/icons/svg-icons/ArrowDown';
import PlusIcon from '@assets/icons/svg-icons/PlusIcon';
import Button from '@components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { L } from '@utils/locales/L';
import PAGE_ROUTES from '@utils/constants/pageRoutes';
import { useClickOutside } from '@utils/hooks/useClickOutSide';
import './styles.scss';

const BannerDashBoard = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const optionRef = useClickOutside(() => setIsDropDown(false));
  const navigate = useNavigate();

  const handleNavigate = () => {
    const { ROOT, SELECT_TEMPLATE } = PAGE_ROUTES.WORKFLOW;
    const path = `/${ROOT}/${SELECT_TEMPLATE}`;
    navigate(path, { state: 'BUILD' });
  };

  return (
    <div className="banner-image">
      <div className="container relative mx-auto h-full">
        <div className="flex items-center justify-between absolute bottom-[50px] left-0 right-0">
          <p className="text-white text-[34px] font-semibold tracking-[0.374px]">
            {L('governance')}
          </p>
          <div className="flex">
            <Button
              startIcon={<PlusIcon />}
              className="bg-white text-violet-version-5 py-[12px] px-[16px] border-[1.5px] border-solid border-[#5D23BB] !text-[17px] h-[48px]"
              variant="text"
              onClick={handleNavigate}
            >
              {L('newBlueprint')}
            </Button>
            <div className="relative">
              <Button
                onClick={() => setIsDropDown(!isDropDown)}
                startIcon={<PlusIcon color="white" />}
                className="text-text_2 ml-4 py-[12px] px-[16px] h-[48px]"
                endIcon={<ArrowDown />}
              >
                {L('createNew')}
              </Button>
              {isDropDown && (
                <div
                  id="dropdown"
                  className="z-40 bg-white rounded-lg min-w-[274px] absolute right-0 mt-2 border-1.5 border-gray-normal text-base leading-21px"
                >
                  <ul
                    className="text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                    ref={optionRef}
                  >
                    <li>
                      <Link
                        to={`/${PAGE_ROUTES.INITIATIVE.ROOT}`}
                        className="block py-[26px] px-[16px] text-[16px] hover:bg-gray-100 hover:rounded-tl-lg hover:rounded-tr-lg"
                      >
                        {L('newInitiative')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/${PAGE_ROUTES.CREATE_PROPOSAL}`}
                        className="block py-[26px] px-[16px] text-[16px] hover:bg-gray-100 hover:rounded-bl-lg hover:rounded-br-lg"
                      >
                        {L('newProposal')}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDashBoard;
