import { Button } from '@src/ui/components/Button';
import { Slider } from '@src/ui/components/Slider';
import { IActions, IData } from '@src/ui/types';
import { withState } from '@src/ui/withState';
import cx from 'classnames';
import * as React from 'react';

interface VolumeButtonProps {
  data: IData;
  actions: IActions;
}

export const VolumeButton = withState((props: VolumeButtonProps) => (
  <div
    className={cx('igui_volume', {
      'igui_volume_state-open': props.data.isVolumeControlsOpen,
    })}
    onMouseEnter={props.actions.setVolumeControlsOpen}
    onMouseLeave={props.actions.setVolumeControlsClosed}
  >
    <Button icon='volume-2' onClick={props.actions.toggleMute} />
    <div className='igui_volume_collapse'>
      <div className='igui_volume_container'>
        <Slider
          className='igui_volumebar'
          onChange={percentage => props.actions.setVolume(percentage)}
        >
          {sliderInfo => (
            <div className='igui_volumebar_container'>
              <div
                className='igui_volumebar_progress'
                style={{
                  transform: `scaleX(${props.data.volumeBarPercentage})`,
                }}
              />
              <div
                style={{
                  transform: `translateX(${props.data.volumeBarPercentage *
                    100}%)`,
                }}
              >
                <div className='igui_volumebar_scrubber' />
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  </div>
));
