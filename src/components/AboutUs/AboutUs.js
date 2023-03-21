import React from 'react'
import './AboutUs.scss'

const ProblemsData = [
  {
    image: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.81464 61.4899C2.81464 62.9289 3.98118 64.0954 5.42018 64.0954H35.8422C37.837 66.4346 39.0445 69.4654 39.0445 72.7807C39.0445 76.0394 36.2215 79.0243 34.0013 81.3467C33.7705 81.5881 33.9436 81.9862 34.2777 81.9862H55.7223C56.0564 81.9862 56.2295 81.5881 55.9988 81.3467C53.7786 79.0243 50.9556 76.0394 50.9556 72.7807C50.9556 69.4654 52.163 66.4346 54.1578 64.0954H84.5798C86.0188 64.0954 87.1854 62.9289 87.1854 61.4899V10.6193C87.1854 9.18021 86.0188 8.01367 84.5798 8.01367H5.42018C3.98118 8.01367 2.81464 9.18021 2.81464 10.6193V61.4899ZM45 63.351C43.3554 63.351 42.0222 62.0178 42.0222 60.3732C42.0222 58.7286 43.3554 57.3954 45 57.3954C46.6446 57.3954 47.9778 58.7286 47.9778 60.3732C47.9778 62.0178 46.6446 63.351 45 63.351ZM8.27388 13.473H81.7261V55.9065H8.27388V13.473ZM33.0912 24.6372C34.1469 25.2444 35.3066 25.7695 36.532 26.2017H53.468C54.6934 25.7695 55.8531 25.2444 56.9088 24.6372C57.3355 25.1568 57.7349 25.7039 58.0904 26.2782C59.108 26.415 60.0652 26.7432 60.9295 27.2191C58.1671 21.1745 52.0676 16.9678 45 16.9678C37.9324 16.9678 31.8275 21.1745 29.0705 27.2191C29.9348 26.7432 30.8921 26.415 31.9096 26.2782C32.2651 25.7039 32.6645 25.1568 33.0912 24.6372ZM55.4537 23.1C54.5621 23.5759 53.5993 23.9916 52.5928 24.3418C52.3028 23.6416 51.9856 22.9742 51.641 22.3342C51.1267 21.3878 50.5687 20.5564 49.9834 19.8452C52.0348 20.5454 53.8893 21.6668 55.4537 23.1ZM46.0284 19.238C47.3194 19.7686 48.7089 21.2292 49.8412 23.3134C50.1147 23.8221 50.3719 24.3582 50.6071 24.9161C49.1301 25.2718 47.5874 25.4905 46.0284 25.5617V19.238ZM43.9716 19.238V25.5617C42.4126 25.4905 40.8699 25.2718 39.3929 24.9161C39.6281 24.3582 39.8853 23.8221 40.1588 23.3134C41.2912 21.2292 42.6806 19.7686 43.9716 19.238ZM40.0166 19.8452C39.4313 20.5564 38.8733 21.3878 38.359 22.3342C38.0144 22.9742 37.6972 23.6416 37.4072 24.3418C36.4007 23.9916 35.4379 23.5759 34.5463 23.1C36.1108 21.6668 37.9652 20.5454 40.0166 19.8452ZM56.9088 44.3084C55.8531 43.7012 54.6934 43.176 53.468 42.7439H36.532C35.3066 43.176 34.1469 43.7012 33.0912 44.3084C32.6645 43.7887 32.2651 43.2417 31.9096 42.6673C30.8921 42.5305 29.9348 42.2023 29.0705 41.7264C31.8275 47.7656 37.9324 51.9777 45 51.9777C52.0676 51.9777 58.1671 47.7656 60.9295 41.7264C60.0652 42.2023 59.108 42.5305 58.0904 42.6673C57.7349 43.2417 57.3355 43.7887 56.9088 44.3084ZM34.5463 45.8455C35.4379 45.3696 36.4007 44.9538 37.4072 44.6038C37.6972 45.3039 38.0144 45.9713 38.359 46.6114C38.8733 47.5577 39.4313 48.3892 40.0166 49.1003C37.9652 48.4001 36.1108 47.2787 34.5463 45.8455ZM43.9716 49.7075C42.6806 49.177 41.2912 47.7163 40.1588 45.6322C39.8853 45.1234 39.6281 44.5874 39.3929 44.0294C40.8699 43.6739 42.4126 43.455 43.9716 43.3839V49.7075ZM46.0284 49.7075V43.3839C47.5874 43.455 49.1301 43.6739 50.6071 44.0294C50.3719 44.5874 50.1147 45.1234 49.8412 45.6322C48.7089 47.7163 47.3194 49.177 46.0284 49.7075ZM49.9834 49.1003C50.5687 48.3892 51.1267 47.5577 51.641 46.6114C51.9856 45.9713 52.3028 45.3039 52.5928 44.6038C53.5993 44.9538 54.5621 45.3696 55.4537 45.8455C53.8893 47.2787 52.0348 48.4001 49.9834 49.1003ZM56.9692 28.9359H33.0308C29.9786 28.9359 27.494 31.4206 27.494 34.4727C27.494 37.5249 29.9786 40.0096 33.0308 40.0096H56.9692C60.0214 40.0096 62.506 37.5249 62.506 34.4727C62.506 31.4206 60.0214 28.9359 56.9692 28.9359ZM38.4853 37.6958H36.9669L36.2825 34.8689L35.5094 37.6958H33.9918L32.3565 31.2498H34.1553L34.8295 34.1241L35.5905 31.2498H37.1167L37.7919 34.0648L38.5286 31.2498H40.3121L38.4853 37.6958ZM47.1511 37.6958H45.6325L44.9482 34.8693L44.1753 37.6958H42.6574L41.0222 31.2498H42.8211L43.4954 34.1237L44.2564 31.2498H45.7824L46.4576 34.0648L47.1945 31.2498H48.9778L47.1511 37.6958ZM55.8167 37.6958H54.2983L53.6139 34.8693L52.841 37.6958H51.3231L49.6879 31.2498H51.4867L52.1611 34.1237L52.9221 31.2498H54.4481L55.1233 34.0648L55.8603 31.2498H57.6436L55.8167 37.6958Z"
          fill="url(#paint0_linear_12_632)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_12_632"
            x1="2.81464"
            y1="8.01367"
            x2="101.083"
            y2="43.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Decentralized Domains',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    image: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M72.2941 81.12H17.7059C16.7506 81.12 16 80.3632 16 79.4V38.12C16 37.1568 16.7506 36.4 17.7059 36.4H72.2941C73.2494 36.4 74 37.1568 74 38.12V79.4C74 80.3632 73.2494 81.12 72.2941 81.12ZM19.4118 77.68H70.5882V39.84H19.4118V77.68ZM68.8824 39.84H55.2353C54.28 39.84 53.5294 39.0832 53.5294 38.12V27.8C53.5294 25.5296 52.6082 23.328 51.0388 21.7112C49.4353 20.0944 47.2859 19.2 45 19.2C42.7379 19.2 40.5684 20.1061 38.9688 21.7189C37.3692 23.3317 36.4706 25.5191 36.4706 27.8V38.12C36.4706 39.0832 35.72 39.84 34.7647 39.84H21.1176C20.1624 39.84 19.4118 39.0832 19.4118 38.12V27.8C19.4118 13.5584 30.8753 2 45 2C51.8235 2 58.2718 4.6832 63.0823 9.568C67.9271 14.4528 70.5882 20.92 70.5882 27.8V38.12C70.5882 39.0832 69.8376 39.84 68.8824 39.84ZM56.9412 36.4H67.1765V27.8C67.1765 21.8144 64.8565 16.2072 60.6941 11.976C58.6379 9.89282 56.1916 8.24229 53.4975 7.12028C50.8033 5.99826 47.9149 5.42711 45 5.44C32.7859 5.44 22.8235 15.4848 22.8235 27.8V36.4H33.0588V27.8C33.0588 21.1608 38.4153 15.76 45 15.76C48.2071 15.76 51.1753 16.9984 53.4271 19.3032C55.6447 21.5392 56.9412 24.6352 56.9412 27.8V36.4ZM31.3529 67.36H27.9412C26.9859 67.36 26.2353 66.6032 26.2353 65.64V51.88C26.2353 50.9168 26.9859 50.16 27.9412 50.16H31.3529C34.1847 50.16 36.4706 52.4648 36.4706 55.32V62.2C36.4706 65.0552 34.1847 67.36 31.3529 67.36ZM29.6471 63.92H31.3529C32.3082 63.92 33.0588 63.1632 33.0588 62.2V55.32C33.0588 54.3568 32.3082 53.6 31.3529 53.6H29.6471V63.92ZM46.9788 86.28C46.9788 85.3168 46.2282 84.56 45.2729 84.56H44.7271C43.7718 84.56 43.0212 85.3168 43.0212 86.28C43.0212 87.2432 43.7718 88 44.7271 88H45.2729C46.2282 88 46.9788 87.2432 46.9788 86.28ZM74 86.28V79.4C74 78.4368 73.2494 77.68 72.2941 77.68H17.7059C16.7506 77.68 16 78.4368 16 79.4V86.28C16 87.2432 16.7506 88 17.7059 88H38.1765C39.1318 88 39.8824 87.2432 39.8824 86.28C39.8824 85.3168 39.1318 84.56 38.1765 84.56H19.4118V81.12H70.5882V84.56H51.8235C50.8682 84.56 50.1176 85.3168 50.1176 86.28C50.1176 87.2432 50.8682 88 51.8235 88H72.2941C73.2494 88 74 87.2432 74 86.28ZM48.8212 67.3256C49.6059 67.1536 50.1176 66.4656 50.1176 65.64V51.88C50.1176 50.9168 49.3671 50.16 48.4118 50.16C47.4565 50.16 46.7059 50.9168 46.7059 51.88V58.3472L43.1235 51.0888C42.9577 50.7392 42.6763 50.4587 42.3276 50.2955C41.979 50.1323 41.5849 50.0965 41.2129 50.1944C40.4282 50.3664 39.8824 51.0544 39.8824 51.88V65.64C39.8824 66.6032 40.6329 67.36 41.5882 67.36C42.5435 67.36 43.2941 66.6032 43.2941 65.64V59.1728L46.8765 66.4312C47.1835 67.016 47.7635 67.3944 48.4118 67.3944C48.5482 67.3944 48.6847 67.3944 48.8212 67.36V67.3256ZM63.7647 62.2C63.7647 59.3448 61.4788 57.04 58.6471 57.04C57.6918 57.04 56.9412 56.2832 56.9412 55.32C56.9412 54.3568 57.6918 53.6 58.6471 53.6H62.0588C63.0141 53.6 63.7647 52.8432 63.7647 51.88C63.7647 50.9168 63.0141 50.16 62.0588 50.16H58.6471C55.8153 50.16 53.5294 52.4648 53.5294 55.32C53.5294 58.1752 55.8153 60.48 58.6471 60.48C59.6024 60.48 60.3529 61.2368 60.3529 62.2C60.3529 63.1632 59.6024 63.92 58.6471 63.92H55.2353C54.28 63.92 53.5294 64.6768 53.5294 65.64C53.5294 66.6032 54.28 67.36 55.2353 67.36H58.6471C61.4788 67.36 63.7647 65.0552 63.7647 62.2Z"
          fill="url(#paint0_linear_12_638)"
          stroke="url(#paint1_linear_12_638)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_12_638"
            x1="-5"
            y1="13.5"
            x2="45"
            y2="88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12_638"
            x1="6"
            y1="9"
            x2="45"
            y2="88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
        </defs>
      </svg>
    ),

    title: 'DNS Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    current: true
  },
  {
    image: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.3634 57.0741C83.1825 53.8959 82.4822 53.4375 78.75 53.4375C74.7309 53.4375 68.6756 56.9053 65.4441 62.5725L64.1053 63.2419C62.8228 58.6575 59.5378 56.25 56.25 56.25H46.0941C42.7612 53.4038 36.9534 50.625 30.9375 50.625C29.385 50.625 28.125 51.885 28.125 53.4375C28.125 54.99 29.385 56.25 30.9375 56.25C35.7131 56.25 40.6238 58.6659 43.0116 61.0509C43.5375 61.5797 44.2547 61.875 45 61.875H56.25C57.2063 61.875 58.2047 62.8453 58.7166 64.6875H45C43.4475 64.6875 42.1875 65.9475 42.1875 67.5C42.1875 69.0525 43.4475 70.3125 45 70.3125H61.875C61.9059 70.3125 61.9313 70.2956 61.9622 70.2956C62.1478 70.29 62.3278 70.2281 62.5106 70.1831C62.6934 70.1381 62.8791 70.1156 63.045 70.0397C63.0731 70.0256 63.1041 70.0313 63.1294 70.0172L68.7544 67.2047C69.2972 66.9319 69.7416 66.4903 70.0116 65.9475C72.4331 61.11 77.2425 59.0625 78.75 59.0625C79.3969 59.0625 80.1309 59.0625 80.3025 59.1159C80.3447 59.1328 80.3953 59.1694 80.4628 59.2172C77.3831 62.8509 72.7931 68.895 71.3306 70.8328C62.5781 74.565 52.3406 78.5784 50.6419 78.7472C49.8544 78.7219 46.5834 77.8725 43.695 77.1272C38.1488 75.6928 30.8813 73.8225 25.3153 73.2853V53.4375C25.3153 51.885 24.0553 50.625 22.5028 50.625H11.25H5.625C4.0725 50.625 2.8125 51.885 2.8125 53.4375C2.8125 54.99 4.0725 56.25 5.625 56.25H8.4375V75.9375H5.625C4.0725 75.9375 2.8125 77.1975 2.8125 78.75C2.8125 80.3025 4.0725 81.5625 5.625 81.5625H11.25H22.5C23.9878 81.5625 25.1747 80.3981 25.2731 78.9356C30.2878 79.4841 37.0744 81.2278 42.2831 82.575C46.98 83.79 49.2947 84.375 50.625 84.375C53.5753 84.375 66.6816 78.9469 74.2331 75.7097C74.6859 75.5156 75.0825 75.2063 75.375 74.8125C77.6897 71.7272 84.1725 63.2419 86.3634 61.0509C86.8922 60.525 87.1875 59.8078 87.1875 59.0625C87.1875 58.3172 86.8922 57.6 86.3634 57.0741ZM19.6875 75.9375H14.0625V56.25H19.6875V75.9375Z"
          fill="url(#paint0_linear_12_634)"
        />
        <path
          d="M56.25 53.4375C70.2084 53.4375 81.5625 42.0806 81.5625 28.125C81.5625 14.1694 70.2084 2.8125 56.25 2.8125C42.2944 2.8125 30.9375 14.1694 30.9375 28.125C30.9375 42.0806 42.2944 53.4375 56.25 53.4375ZM56.25 8.4375C67.1034 8.4375 75.9375 17.2688 75.9375 28.125C75.9375 38.9813 67.1034 47.8125 56.25 47.8125C45.3938 47.8125 36.5625 38.9813 36.5625 28.125C36.5625 17.2688 45.3938 8.4375 56.25 8.4375Z"
          fill="url(#paint1_linear_12_634)"
        />
        <path
          d="M59.0625 25.3125H53.4375C53.4375 23.76 52.1803 22.5 50.625 22.5C49.0697 22.5 47.8125 23.76 47.8125 25.3125V28.125V36.5625C46.26 36.5625 45 37.8225 45 39.375C45 40.9275 46.26 42.1875 47.8125 42.1875H53.4375C53.4375 43.74 54.6947 45 56.25 45C57.8053 45 59.0625 43.74 59.0625 42.1875H61.875C66.5269 42.1875 70.3125 38.4019 70.3125 33.75C70.3125 30.7547 68.7291 28.1334 66.3722 26.6372C67.0697 25.4081 67.5 24.0103 67.5 22.5C67.5 17.8481 63.7144 14.0625 59.0625 14.0625C59.0625 12.51 57.8053 11.25 56.25 11.25C54.6947 11.25 53.4375 12.51 53.4375 14.0625H47.8125C46.26 14.0625 45 15.3225 45 16.875C45 18.4275 46.26 19.6875 47.8125 19.6875H59.0625C60.615 19.6875 61.875 20.9503 61.875 22.5C61.875 24.0497 60.615 25.3125 59.0625 25.3125ZM64.6875 33.75C64.6875 35.2997 63.4275 36.5625 61.875 36.5625H53.4375V30.9375H59.0625H61.875C63.4275 30.9375 64.6875 32.2003 64.6875 33.75Z"
          fill="url(#paint2_linear_12_634)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_12_634"
            x1="2.8125"
            y1="50.625"
            x2="71.1347"
            y2="104.669"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12_634"
            x1="30.9375"
            y1="2.8125"
            x2="91.5159"
            y2="21.9799"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_12_634"
            x1="45"
            y1="11.25"
            x2="76.5451"
            y2="18.7358"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Pay with Crypto',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    image: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.7754 86.4844C49.7461 84.5947 52.7256 82.7139 55.6963 80.8242C57.041 79.9717 58.4033 79.1279 59.7129 78.2139C62.8242 76.043 65.7422 73.5732 68.335 70.7959C73.4678 65.2852 77.3701 58.7549 79.8398 51.6445C81.8525 45.835 82.7139 39.709 82.7139 33.5742V21.876C82.7139 20.3027 81.6152 18.9316 80.1299 18.4834C79.0576 18.1582 77.9941 17.8242 76.9658 17.3936C77.2471 17.5078 77.5283 17.6309 77.8096 17.7451C75.9726 16.9629 74.25 15.9609 72.668 14.748L73.3799 15.3018C71.8154 14.0889 70.4092 12.6914 69.1963 11.127L69.75 11.8389C68.5371 10.2568 67.5264 8.52539 66.7441 6.68848C66.8584 6.96973 66.9814 7.25098 67.0957 7.53223C66.832 6.89941 66.5859 6.24902 66.375 5.59863C65.9004 4.11328 64.5732 3.01465 62.9824 3.01465H31.4385C29.9883 3.01465 28.5293 2.9707 27.0791 3.01465H27.0176C25.418 3.01465 24.0996 4.11328 23.625 5.59863C23.4141 6.25781 23.1768 6.89941 22.9043 7.53223C23.0186 7.25098 23.1416 6.96973 23.2559 6.68848C22.4736 8.52539 21.4629 10.248 20.25 11.8389L20.8037 11.127C19.5908 12.6914 18.1846 14.0889 16.6201 15.3018L17.332 14.748C15.75 15.9609 14.0186 16.9629 12.1904 17.7451C12.4717 17.6309 12.7529 17.5078 13.0342 17.3936C11.9971 17.8242 10.9424 18.1582 9.87012 18.4834C8.38477 18.9316 7.28613 20.3027 7.28613 21.876V32.4756C7.28613 34.3389 7.28613 36.2021 7.41797 38.0654C7.69922 41.8535 8.34082 45.6328 9.4043 49.2803C11.5137 56.5225 15.1699 63.1934 20.0215 68.9502C23.792 73.4238 28.3359 77.0449 33.2578 80.165L42.9873 86.335C43.0664 86.3877 43.1543 86.4404 43.2334 86.4932C44.7891 87.4775 47.1797 86.8711 48.041 85.2275C48.9551 83.4873 48.4365 81.4746 46.7754 80.4199C45.1934 79.418 43.6113 78.416 42.0381 77.4141C40.0166 76.1309 38.0039 74.8564 35.9824 73.5732C34.5674 72.6768 33.1875 71.7188 31.8516 70.6992L32.5635 71.2529C29.2412 68.6777 26.2529 65.6895 23.6777 62.3672L24.2314 63.0791C21.6123 59.6777 19.4326 55.9512 17.7539 51.9961C17.8682 52.2773 17.9912 52.5586 18.1055 52.8398C16.3916 48.7705 15.2227 44.499 14.6338 40.1221C14.6777 40.4297 14.7217 40.7461 14.7568 41.0537C14.3789 38.2061 14.3174 35.3584 14.3174 32.502V21.9111C13.4561 23.0449 12.5947 24.1699 11.7334 25.3037C14.7656 24.3896 17.7012 23.1768 20.2764 21.3223C23.3262 19.125 25.9277 16.418 27.8613 13.1836C28.9248 11.4082 29.7773 9.47461 30.4102 7.50586C29.2764 8.36719 28.1514 9.22852 27.0176 10.0898H58.5615C60.0117 10.0898 61.4707 10.125 62.9209 10.0898H62.9824C61.8486 9.22852 60.7236 8.36719 59.5898 7.50586C61.7959 14.3877 66.8057 20.373 73.3799 23.4668C74.9619 24.2139 76.5879 24.7939 78.2666 25.3037C77.4053 24.1699 76.5439 23.0449 75.6826 21.9111V34.374C75.6826 36.6064 75.5332 38.8389 75.2432 41.0537C75.2871 40.7461 75.331 40.4297 75.3662 40.1221C74.7685 44.4902 73.5996 48.7705 71.8945 52.8398C72.0088 52.5586 72.1318 52.2773 72.2461 51.9961C70.5674 55.9512 68.3877 59.6777 65.7685 63.0791L66.3223 62.3672C63.7471 65.6895 60.7588 68.6777 57.4365 71.2529L58.1484 70.6992C56.1797 72.2197 54.0879 73.5293 51.9961 74.8652C49.6758 76.3418 47.3555 77.8096 45.0352 79.2861C44.4375 79.6641 43.8311 80.0508 43.2334 80.4287C42.4687 80.9121 41.8623 81.6416 41.6162 82.5293C41.3877 83.373 41.4932 84.4893 41.9678 85.2363C42.9697 86.7832 45.1143 87.5391 46.7754 86.4844Z"
          fill="url(#paint0_linear_13_640)"
        />
        <path
          d="M27.0879 44.8154L36.1142 53.8418L37.3975 55.125C38.7422 56.4697 41.0273 56.4697 42.3721 55.125L49.3418 48.1552L60.3721 37.125L62.9121 34.5849C64.2129 33.2841 64.3096 30.8935 62.9121 29.6103C61.5058 28.3183 59.3262 28.2216 57.9375 29.6103L50.9678 36.58L39.9375 47.6103L37.3975 50.1504H42.3721L33.3457 41.124L32.0625 39.8408C30.7617 38.54 28.3711 38.4433 27.0879 39.8408C25.7959 41.247 25.6992 43.4179 27.0879 44.8154Z"
          fill="url(#paint1_linear_13_640)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_13_640"
            x1="7.28613"
            y1="2.99512"
            x2="99.1597"
            y2="29.1045"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_13_640"
            x1="26.0823"
            y1="28.6047"
            x2="67.973"
            y2="46.8248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Domain Theft Protection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    image: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wallet"
      >
        <path
          d="M81.146 53.9841H65.9649C60.3907 53.9807 55.8726 49.466 55.8692 43.8918C55.8692 38.3177 60.3907 33.803 65.9649 33.7996H81.146"
          stroke="url(#paint0_linear_13_643)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67.6838 43.6613H66.5138"
          stroke="url(#paint1_linear_13_643)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.0537 11.25H61.4666C72.3347 11.25 81.1453 20.0607 81.1453 30.9287V57.8426C81.1453 68.7107 72.3347 77.5214 61.4666 77.5214H29.0537C18.1857 77.5214 9.375 68.7107 9.375 57.8426V30.9287C9.375 20.0607 18.1857 11.25 29.0537 11.25Z"
          stroke="url(#paint2_linear_13_643)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.385 28.2675H46.6312"
          stroke="url(#paint3_linear_13_643)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_13_643"
            x1="55.8692"
            y1="33.7996"
            x2="84.6286"
            y2="45.1949"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_13_643"
            x1="66.5138"
            y1="43.6613"
            x2="67.8683"
            y2="44.1627"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_13_643"
            x1="9.375"
            y1="11.25"
            x2="93.9262"
            y2="40.2224"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_13_643"
            x1="26.385"
            y1="28.2675"
            x2="27.019"
            y2="32.329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252FF2" />
            <stop offset="1" stopColor="#0B9CFF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Multi Wallet Connectivity',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  }
]

function AboutUs() {
  return (
    <div className="includes">
      <div className="container">
        <h3>
          <span>About</span>
          Why GoDomains?
        </h3>
        <div className="item-row">
          {ProblemsData.map((data, i) => (
            <>
              <div
                className={`parent ${ProblemsData.length === 5 ? 'odd' : ''}`}
                key={i}
              >
                <div className="box">
                  {data.image}
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
                <svg
                  width="0"
                  height="0"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="20"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="goo"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="goo"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs