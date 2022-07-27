import { useEffect } from "react";
import { connect } from "react-redux";
import history from "../../history";
import ModalWrapper from "../ModalWrapper";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const onDismiss = () => {
    return history.push("/");
  };

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream";
    }

    return `Are you sure you want to delete stream with title: ${props.stream.title}`;
  };

  const deleteContent = () => {
     props.deleteStream(props.match.params.id);
  };

  return (
    <ModalWrapper
      title="Delete Stream"
      content={renderContent()}
      onDismiss={onDismiss}
      deleteContent={deleteContent}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
