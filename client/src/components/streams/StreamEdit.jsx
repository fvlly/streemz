import { Box, Heading, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

//react router passes prop for url manipulation

const StreamEdit = (props) => {

  return(
    <Box>
      <Heading textAlign='center'>Edit Streams</Heading>
      {props.stream && <Text>{props.stream.title}</Text>}
    </Box>
  )
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    stream: state.streams[id],
  };
};

export default connect(mapStateToProps)(StreamEdit);
