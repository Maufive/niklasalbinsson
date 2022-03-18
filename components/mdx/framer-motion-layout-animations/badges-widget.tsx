import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from 'components/code/code-block';
import Badge from 'components/badge';
import Switch from 'components/input/switch';
import { CloseIcon, RefreshIcon } from 'components/icons';
import styles from './badges-widget.module.scss';

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
    <div className={styles.container}>
      <div className={styles.exampleWrapper}>
        {position ? (
          <ul className={styles.filters}>
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
                    <button
                      type="button"
                      onClick={() => handleBadgeClick(filter)}
                      className={styles.badgeButton}
                    >
                      <CloseIcon />
                    </button>
                    <span>{filter}</span>
                  </motion.div>
                </Badge>
              </motion.li>
            ))}
          </ul>
        ) : (
          <ul className={styles.filters}>
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
                    <button
                      type="button"
                      onClick={() => handleBadgeClick(filter)}
                      className={styles.badgeButton}
                    >
                      <CloseIcon />
                    </button>
                    <span>{filter}</span>
                  </div>
                </Badge>
              </motion.li>
            ))}
          </ul>
        )}
        <div className={styles.inputWrapper}>
          <Switch
            id="badges-layout-position"
            label={`Enable layout="position"`}
            onChange={() => setPosition((prev) => !prev)}
            toggled={position}
          />
          <motion.button
            type="button"
            className={styles.refreshButton}
            onClick={onClickRefresh}
          >
            <RefreshIcon />
            Reset
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
