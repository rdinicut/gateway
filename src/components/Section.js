import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Box, CheckBox, Collapsible, Heading } from 'grommet';

// TODO add this to Axis
export const Section = withTheme(props => {
  const { title, collapsibleLabel, collapsed, onCollapse, children, theme, headingLevel, ...rest } = props;
  const [opened, open] = useState(!collapsed);

  return (
    <Box {...rest}>
      <Box direction="row" gap="medium">
        <Heading style={{ minWidth: '100px' }} level={headingLevel || 2}>{title}</Heading>
        {collapsibleLabel && (
          <CheckBox
            label={collapsibleLabel}
            checked={opened}
            onChange={ev => onCollapse ? onCollapse(ev.target.checked) : open(ev.target.checked)}
          />
        )}
      </Box>
      <Collapsible open={opened}>{children}</Collapsible>
    </Box>
  );
});