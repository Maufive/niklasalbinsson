import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from 'components/code/code-block';
import Badge from 'components/badge';
import Switch from 'components/input/switch';
import { CloseIcon, RefreshIcon } from 'components/icons';

const exampleCodePositionLayout = `
import React from 'react';
import { motion } from 'framer-motion';

const BadgesExample: React.FC = () => (
  <ul>
    {filters.map((filter) => (
      <motion.li key={filter} style={{ width: '100%' }} layout>
        <Badge>
          <motion.div
            layout="position"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CloseButton />
            <span>{filter}</span>
          </motion.div>
        </Badge>
      </motion.li>
    ))}
  </ul>     
)
export default BadgesExample;
`.trim();

const exampleCodePositionLayoutOff = `
import React from 'react';
import { motion } from 'framer-motion';

const BadgesExample: React.FC = () => (
  <ul>
    {filters.map((filter) => (
      <motion.li key={filter} style={{ width: '100%' }} layout>
        <Badge>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CloseButton />
            <span>{filter}</span>
          </div>
        </Badge>
      </motion.li>
    ))}
  </ul>
);
  
export default BadgesExample;
`.trim();

const INITIAL_STATE = ['Label 1', 'Label 2', 'Label 3'];

const BadgesWidget: React.FC = () => {
  const [filters, setFilters] = React.useState(INITIAL_STATE);
  const [position, setPosition] = React.useState(false);

  const handleBadgeClick = (badge: string) => {
    setFilters(filters.filter((f) => f !== badge));
  };

  const onClickRefresh = () => {
    setFilters(INITIAL_STATE);
  };

  return (
    <div className="not-prose flex flex-col overflow-auto rounded-t-md">
      <div className="flex flex-col bg-zinc-200 p-3 dark:bg-zinc-800 md:p-6">
        {position ? (
          <ul className="flex gap-3">
            {filters.map((filter) => (
              <motion.li key={filter} style={{ width: '100%' }} layout>
                <Badge>
                  <motion.div
                    layout="position"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    className="flex items-center text-zinc-200"
                  >
                    <button
                      type="button"
                      onClick={() => handleBadgeClick(filter)}
                    >
                      <CloseIcon />
                    </button>
                    <span className="text-sm">{filter}</span>
                  </motion.div>
                </Badge>
              </motion.li>
            ))}
          </ul>
        ) : (
          <ul className="flex gap-3">
            {filters.map((filter) => (
              <motion.li key={filter} style={{ width: '100%' }} layout>
                <Badge>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    className="flex items-center text-zinc-200"
                  >
                    <button
                      type="button"
                      onClick={() => handleBadgeClick(filter)}
                    >
                      <CloseIcon />
                    </button>
                    <span className="text-sm">{filter}</span>
                  </div>
                </Badge>
              </motion.li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-col justify-around gap-2 md:mt-3 md:flex-row md:gap-0">
          <Switch
            id="badges-layout-position"
            label={`Enable layout="position"`}
            onChange={() => setPosition((prev) => !prev)}
            toggled={position}
          />
          <motion.button
            type="button"
            className="flex w-fit cursor-pointer items-center justify-center rounded-full border-none bg-transparent p-2 text-base text-zinc-600 dark:text-zinc-400"
            onClick={onClickRefresh}
          >
            <RefreshIcon />
            <span className="ml-4">Reset</span>
          </motion.button>
        </div>
      </div>
      <CodeBlock
        codeString={
          position ? exampleCodePositionLayout : exampleCodePositionLayoutOff
        }
        language="jsx"
      />
    </div>
  );
};

export default BadgesWidget;
