import React from 'react';

function Logo({ color }) {
  return (
    <svg width="124px" height="80px" viewBox="0 0 124 80">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="NM" transform="translate(-67.000000, -43.000000)" fill={color || '#fff'}>
          <polygon id="N" points="67 121.072289 67 43 125 100.831325 125 123 81.5 79.626506 81.5 121.072289" />
          <polygon id="M" points="191 121 191 43 149.982558 83.9259259 108 43 108 64.1851852 149.982558 106.555556 176.523256 79.5925926 176.523256 121" />
        </g>
      </g>
    </svg>
  );
}

export default Logo;
