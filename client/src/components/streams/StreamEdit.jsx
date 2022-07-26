import _ from "lodash";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

//react router passes prop for url manipulation

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  console.log(props);

  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };

  const renderEditForm = () => {
    if (!props.stream) {
      return <Heading>Loading</Heading>;
    }

    // const { title, description } = props.stream;
    // console.log(title,description);

    return (
      <Box>
        <Heading mb={4} textAlign="center">
          Edit Stream
        </Heading>
        <StreamForm
           initialValues={_.pick(props.stream, "title", "description")}
          onFormSubmit={onSubmit}
        />
      </Box>
    );
  };

  return renderEditForm();
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    stream: state.streams[id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
