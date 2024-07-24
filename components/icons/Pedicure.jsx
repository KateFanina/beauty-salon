const Pedicure = ({ size, currentColor }) => (
  <svg
    fill={currentColor}
    height={`${size}px`}
    width={`${size}px`}
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    version='1.0'
  >
    <path d='M138 2c-1.1 1.1-2 2.8-2 3.7 0 3 5.9 45.3 7.5 53.9 2.7 14.7 8.3 33 15.8 52.1 14.6 37 18.3 43.5 53.4 93.5 24.4 34.7 24.5 35 37.3 61.1 7.1 14.4 15.2 31.8 18 38.7 2.9 6.8 6.5 14.3 8.1 16.6 9.2 13.4 30.7 25.1 51 27.9 4.1.5 4.7.9 5.2 3.5.8 3.7 6.3 9.9 10.4 11.6 2 .9 7.1 1.4 13.2 1.4 9.4 0 9.9.1 9.4 2-.3 1.1-2.3 4-4.4 6.4-7.8 8.8-22.6 11.1-42.9 6.7-11.9-2.7-18.2-2.6-30 .1-7.3 1.7-12.6 2.1-23 2.1-15.9 0-24.6-2-37.1-8.2-15.8-7.9-24.9-16.8-38.6-37.4-15.8-23.8-28-36.6-43.5-45.9-9.6-5.7-19-8.6-31.4-9.9-21.8-2.2-36-7.8-47.6-18.7-11.7-11-16.4-23.4-15.6-41.1.4-8.5 1.2-12 7.1-30.2 3.7-11.3 7.2-24.2 7.8-28.5 1.4-9.9.5-24.6-2.1-35-1.8-7.3-6.4-19.6-8.1-21.9-.4-.6-8.2-20.1-17.4-43.5S21.1 19.7 20.2 18.7C17 15.1 10 17.5 10 22.3c0 2.4 30.5 80.2 36.4 92.9 6.5 14 9.6 32.4 7.7 45.9-.6 4.2-4 16.4-7.5 27-7.7 22.8-9.3 32.5-7.6 45.1 1.3 9.1 4.3 18.2 8.5 25.4 3.7 6.4 15.6 18 22.8 22.3 11.3 6.7 26.4 11.4 40.7 12.6 14.2 1.3 27.2 6 36.3 13.3l3.7 3-3.7.6c-2.1.3-7.8 1.1-12.8 1.6-51.6 6.1-93.4 17.1-111.6 29.5-12.2 8.3-14.7 15.3-11.4 31.4 3.8 18.7 11.8 37.9 22.6 54.2 8.2 12.4 28 32.2 41.4 41.5 31.3 21.7 73.9 35.9 124 41.5 15.5 1.7 78.5 2.3 98.1 1 65.6-4.5 115.6-22 152.9-53.3 26.2-22 44.5-54 50.2-87.8 1.6-9.2 1.6-9.9-.2-14.5-9.9-26.2-82.1-43.6-203.9-49.3l-14.8-.7-5.2-12.5c-2.9-6.9-10.7-23.3-17.3-36.5-11.5-23.2-12.8-25.1-35.7-57.4-34.3-48.4-37.5-53.8-51.6-89.1-12.4-31-15.2-42.4-21-84.4C147.9 2.5 147 0 142.3 0c-1.2 0-3.2.9-4.3 2zm205 319.5c81.7 6.6 147 23.9 147 39 0 3.8-6.1 9.5-14.6 13.5l-6.6 3.2-8.6-4c-16.1-7.4-40.1-13.5-64.2-16.2-16.5-1.8-16-1.6-16-5.6 0-4.8-3.2-10.5-7.2-12.9-3-1.8-5.2-2-26.8-2-21.7 0-23.9-.2-29.2-2.2-9-3.4-15.7-7-21.2-11.5l-5.1-4.1 16.5.6c9.1.4 25.3 1.4 36 2.2zm-176.5 4.7c2 2.4 6.5 8.6 10.1 13.8l6.5 9.5-9.8.8c-55.6 4.4-96.2 12.5-124 24.7l-5.1 2.3-5.4-2.2c-7-2.8-14.9-8.9-16.1-12.4-1.2-3.7.9-6.8 7.8-11.3C48.3 340.1 89 330 141.6 324c22.3-2.5 20.7-2.7 24.9 2.2zm315.9 64c-12.3 34.6-40.7 64.3-78.8 82.8-27.4 13.3-59 21.3-98.6 25.1-16.6 1.6-80.7 1.6-98 0-90.4-8.3-151.7-44.6-175.4-103.9-2.1-5.2-3.6-9.6-3.3-9.8.2-.2 3.4.9 7.1 2.6 56.1 25.1 204.4 36 326.1 23.9 35.4-3.5 65.8-8.6 89-15 11.4-3.1 27.5-9.1 31-11.5 3.4-2.4 3.5-1.6.9 5.8z' />
    <path d='M310.3 111c-7.3 4.4-12.6 15.7-12.7 27.1l-.1 6.5-6-1.9c-8.4-2.6-21.6-2.1-26.8 1.2-5.1 3.1-7 7.2-6.5 13.3.5 4.5.2 5.2-2.8 8.2-3.3 3.3-3.9 5.2-3.4 10.6.7 8 12 17.5 24.7 20.9l4.3 1.2-3 4c-3.9 5.4-6.9 13.7-7.7 21-1.1 10.8 4.2 18.9 12.2 18.9 2.4 0 3.4.7 4.9 3.4 3.8 7.1 12.2 8.2 23 3.3 6.5-3 10.7-6.6 14.4-12.2l3-4.5 2.7 4.1c3.6 5.1 8.8 9.2 15.6 12.4 9.7 4.5 18.4 2.4 21-4.9 1.1-3.1 1.7-3.6 4.6-3.6 4.9 0 9.8-4.8 11.3-11 1.9-8-1.1-19-7.6-27.7-2.8-3.7-2.9-4.3-.8-4.3 3 0 12.4-5.2 17.3-9.6 5.2-4.6 9.1-11.3 9.1-15.5 0-3.1-3.3-8.6-5.8-9.3-1.6-.5-1.8-1.4-1.4-6 .4-5 .2-5.6-3.3-9.5-6.2-6.9-19.8-9.2-31.1-5.3l-5.2 1.8-.4-7.7c-1.1-18.8-14.3-31.8-25.4-25-2.9 1.8-3.1 1.8-5.3 0-3-2.5-8.7-2.4-12.8.1zm25.7 56.4c6.9 4.5 8.9 15.2 4.2 21.6-7.3 9.8-20 9.3-27-1-2-2.9-2.3-4.4-2-8.8.6-6.4 2.9-9.9 8.9-13 5.4-2.8 10.4-2.5 15.9 1.2z' />
  </svg>
);
export default Pedicure;