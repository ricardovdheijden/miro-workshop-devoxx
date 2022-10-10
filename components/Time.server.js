import moment from "moment";

// Server components are renderen on te server, means they come as HTML to the browser
const Time = () => {
  return <time>
    {moment().format('DD/MM/YYYY HH:mm')}
  </time>;
};

export default Time;
