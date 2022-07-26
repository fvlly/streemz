import { Box, Heading } from "@chakra-ui/react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  //helper function
  const onFormSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <Box>
      <Heading mb={4}>Create a stream</Heading>
      <StreamForm onFormSubmit={onFormSubmit} />
    </Box>
  );
};

export default connect(null, { createStream })(StreamCreate);
