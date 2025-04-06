import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';



export default function({ isMobail, ...props }) {
    return(
        <SvgIcon  
            viewBox="0 0 208 35" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                mt: !isMobail && 1,
                width: isMobail ? 180 : 200,
            }}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M32.7213 18.4224L32.7205 13.9395L24.311 18.9181L24.3134 19.7673L20.217 22.0824L20.226 12.278L24.2108 10.0477L24.2617 12.7228L32.7303 7.9612V5.16854L23.7487 0.0550842L16.3463 4.24121L8.84371 0L0.059914 4.97041L0 25.6223L16.3668 35L32.7197 25.638L32.7189 21.3836L21.2454 28.1396L16.3504 31.0219L3.39795 23.503L3.40206 7.06429L9.09979 3.61723L16.3767 7.96778L23.4853 3.72987L28.6906 6.75518L27.269 7.57646L24.2461 5.94048L16.9159 10.0321L16.9184 28.1799L27.8197 22.1079L27.8181 21.3639L32.7213 18.4224Z" fill="#9C2426"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.4421 12.264L12.4617 26.4304L15.8023 28.1757L15.8121 10.0452L8.51717 5.92236L5.38432 7.57395L5.37939 22.7737L8.67722 24.5149L8.64767 10.1512L12.4421 12.264Z" fill="#9C2426"/>
            <path d="M50.4965 17.2506L54.9516 9.92407H58.4325V23.8085H54.9516V16.0051L51.6776 21.1728H49.2949L46.0422 16.0051V23.8085H42.54V9.92407H46.0422L50.4965 17.2506Z" fill="#415878"/>
            <path d="M64.8879 18.3292V20.6952H71.8085V23.8085H61.366V9.92407H71.5803V13.0374H64.8879V15.3614H71.3735V18.3292H64.8879Z" fill="#415878"/>
            <path d="M77.4143 23.8085V13.0168H73.2908V9.92407H85.1426V13.0168H81.0404V23.8085H77.4143Z" fill="#415878"/>
            <path d="M90.7903 23.8085H87.1018V9.92407H99.1818V23.8085H95.5146V13.0168H90.7903V23.8085Z" fill="#415878"/>
            <path d="M108.786 9.92407C110.319 9.92407 111.583 10.4017 112.558 11.3562C113.531 12.3106 114.008 13.5561 114.008 15.0712C114.008 16.6275 113.511 17.8935 112.516 18.8274C111.522 19.7613 110.195 20.2389 108.538 20.2389H105.699V23.8085H102.094V9.92407H108.786ZM105.699 17.1462H108.206C108.849 17.1462 109.367 16.9596 109.76 16.5658C110.154 16.1712 110.361 15.6936 110.361 15.0918C110.361 14.49 110.175 13.9918 109.781 13.598C109.387 13.2034 108.89 13.0168 108.268 13.0168H105.699V17.1462Z" fill="#415878"/>
            <path d="M127.798 22.0238C126.43 23.3728 124.711 24.0576 122.618 24.0576C120.526 24.0576 118.806 23.3728 117.438 22.0032C116.07 20.6542 115.387 18.931 115.387 16.8766C115.387 14.8222 116.07 13.0999 117.438 11.7303C118.806 10.3599 120.526 9.67505 122.618 9.67505C124.711 9.67505 126.43 10.3599 127.819 11.7303C129.186 13.0999 129.87 14.8222 129.87 16.8766C129.87 18.931 129.186 20.6542 127.798 22.0238ZM122.618 20.7372C123.675 20.7372 124.566 20.3631 125.291 19.6167C126.016 18.8899 126.369 17.9766 126.369 16.8766C126.369 15.7767 126.016 14.8633 125.291 14.1168C124.566 13.3901 123.675 13.0169 122.618 13.0169C121.561 13.0169 120.691 13.3901 119.966 14.1168C119.241 14.8633 118.889 15.7767 118.889 16.8766C118.889 17.9766 119.241 18.8899 119.966 19.6167C120.691 20.3631 121.561 20.7372 122.618 20.7372Z" fill="#415878"/>
            <path d="M140.097 17.2506L144.551 9.92407H148.033V23.8085H144.551V16.0051L141.278 21.1728H138.895L135.642 16.0051V23.8085H132.14V9.92407H135.642L140.097 17.2506Z" fill="#415878"/>
            <path d="M157.534 24.0576C155.441 24.0576 153.721 23.3728 152.354 22.0032C150.986 20.6542 150.302 18.931 150.302 16.8766C150.302 14.8222 150.986 13.0999 152.354 11.7303C153.7 10.3599 155.441 9.67505 157.534 9.67505C159.005 9.67505 160.331 10.0277 161.512 10.7545C162.672 11.4812 163.501 12.4357 164.019 13.6598L160.89 15.2579C160.6 14.5731 160.144 14.0338 159.543 13.6186C158.942 13.224 158.238 13.0169 157.471 13.0169C156.414 13.0169 155.544 13.3901 154.861 14.1168C154.156 14.8427 153.804 15.7767 153.804 16.8766C153.804 17.9766 154.156 18.8899 154.861 19.6167C155.565 20.3631 156.436 20.7372 157.492 20.7372C158.258 20.7372 158.963 20.5292 159.585 20.114C160.206 19.6989 160.662 19.139 160.932 18.4337L164.143 19.9069C163.625 21.1729 162.776 22.1693 161.595 22.9158C160.414 23.6836 159.046 24.0576 157.534 24.0576Z" fill="#415878"/>
            <path d="M174.888 15.5069V9.92407H178.576V23.8085H174.888V18.8693H169.666V23.8085H165.978V9.92407H169.666V15.5069H174.888Z" fill="#415878"/>
            <path d="M194.334 23.8085H190.522L189.818 21.4425H184.824L184.099 23.8085H180.245L185.156 9.92407H189.527L194.334 23.8085ZM185.694 18.4336H189.009L187.352 12.9749L185.694 18.4336Z" fill="#415878"/>
            <path d="M199.629 14.9882H203.317C204.747 14.9882 205.886 15.3828 206.736 16.1917C207.585 17.0015 208 18.0596 208 19.3675C208 20.6746 207.565 21.7541 206.695 22.563C205.825 23.3933 204.685 23.8085 203.276 23.8085H196.024V9.92407H206.757V13.0168H199.629V14.9882ZM199.629 20.9648H202.613C203.131 20.9648 203.546 20.8202 203.877 20.5086C204.208 20.197 204.374 19.8238 204.374 19.3461C204.374 18.8693 204.208 18.4953 203.898 18.1845C203.587 17.8935 203.172 17.748 202.696 17.748H199.629V20.9648Z" fill="#415878"/>
        </SvgIcon>
    );
}