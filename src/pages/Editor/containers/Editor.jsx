import React from "react";
import Input from '../../../components/Input';
import Button from "@material-ui/core/Button";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import importedBookActions from "../../Editor/actions/book";
import Box from '@material-ui/core/Box';
import RestoreIcon from '../../../components/Icon/Restore';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // id: '',
      // name: '',
      // author: '',
      // genre: '',
      // price: '',
      inputName: '',
      inputAuthor: '',
      inputGenre: '',
      inputPrice: '',
    }
  }

  handleChange(e) {
    this.setState({
      inputName: e.target.value,
      inputAuthor: e.target.value,
      inputGenre: e.target.value,
      inputPrice: e.target.value,
    });
  }

  cancelChanges(changes, oldValue) {
    let first = changes;
    let second = oldValue;
    this.setState({
      inputName: oldValue
    })
  }

  saveBook() {
    this.props.actionFetchSaveBook({
      id: this.state.id,
      name: this.state.name,
      author: this.state.author,
      genre: this.state.genre,
      price: this.state.price,
    });
    console.log(this.props);
  }

  componentDidMount() {
    this.props.actionFetchBook({
      id: this.props.match.params.bookId,
    });
    this.setState({
      id: this.props.match.params.bookId,
      name: this.props.name,
      author: this.props.author,
      genre: this.props.genre,
      price: this.props.price,
      inputName: this.props.name,
      inputAuthor: this.props.author,
      inputGenre: this.props.genre,
      inputPrice: this.props.price,
    });
    console.log("did mount" + this.props);
    console.log('search: ' + this.props.match.params.bookId);
  }

  setBook = (book) => {
    this.setState({
      id: book.id,
      name: book.name,
      // TODO other fields
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.book !== prevProps.book) {
      this.setBook(this.props.book);
    }
  }

  render() {
    console.log("render: ", this.props);
    console.log("inputName: ", this.state.inputName);
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'start',
        width: '100%',
        paddingTop: '100px'
      }}>
        <div>
          <Box sx={{border: 1, p: 1, background: 'white', width: '220px'}}>
            <div>
              {/*{Object.keys(this.props.book)*/}
                {/*.map((fieldName) => (*/}
                  {/*<div>*/}
                    {/*<div style={{*/}
                      {/*fontStyle: 'italic', fontWeight: 700, background: '#008080',*/}
                      {/*width: '290px'*/}
                    {/*}}*/}
                    {/*>*/}
                      {/*{`${fieldName}:`}*/}
                    {/*</div>*/}
                    {/*<Input*/}
                      {/*value={this.state[fieldName]}*/}
                      {/*onChange={({ target }) => this.setState({*/}
                        {/*[fieldName]: target.value,*/}
                      {/*})}*/}
                    {/*/>*/}
                  {/*</div>*/}
                {/*))*/}
              {/*}*/}
              <div>
                <div style={{
                  fontStyle: 'italic', fontWeight: 700, background: '#008080',
                  width: '290px'
                }}
                >
                  Name:
                </div>
                  <Input
                    value={this.state.inputName}
                    onChange={this.handleChange}
                  />
              </div>
              <div>
                <div style={{
                  fontStyle: 'italic', fontWeight: 700, background: '#008080',
                  width: '290px'
                }}
                >
                  Author:
                </div>
                <Input
                  value={this.state.inputAuthor}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <div style={{
                  fontStyle: 'italic', fontWeight: 700, background: '#008080',
                  width: '290px'
                }}
                >
                  Genre:
                </div>
                <Input value={this.state.inputGenre} onChange={this.handleChange}/>
              </div>
              <div>
                <div style={{
                  fontStyle: 'italic', fontWeight: 700, background: '#008080',
                  width: '290px'
                }}
                >
                  Price:
                </div>
                <Input value={this.state.inputPrice} onChange={this.handleChange}/>
              </div>
            </div>

          </Box>
          <div>
            <Button
              onClick={() =>
                this.saveBook()
              }
              variant="outlined"
              style={{
                width: '300px',
                color: 'black',
                fontStyle: 'italic',
                borderColor: 'black'
              }}
            >
              UPDATE
            </Button>
          </div>
        </div>
        <div>
          <div style={{height: '15px'}}></div>
          <Button
            onClick={() => {
              // this.cancelChanges(this.state.inputName, this.state.name);
            }}
            endIcon={<RestoreIcon color="black" size={30}/>}
            style={{
              color: 'black',
              borderColor: 'black',
              height: '50px'
            }}
            variant="outlined"
          />
        </div>
      </div>
    );

  }

}

const mapReduxStateToProps = state => ({
  book: state.reducer.book,
  // isFailedFetchBook: state.reducer.isFailedFetchBook,
  // isFetchingBook: state.reducer.isFetchingBook,
});

// const mapReduxStateToProps = state => ({
//   id: state.reducer.id,
//   name: state.reducer.name,
//   author: state.reducer.author,
//   genre: state.reducer.genre,
//   price: state.reducer.price,
//   // isFailedFetchBook: state.reducer.isFailedFetchBook,
//   // isFetchingBook: state.reducer.isFetchingBook,
// });

const mapDispatchToProps = (dispatch) => {
  const {
    fetchBook, fetchSaveBook,
  } = bindActionCreators(importedBookActions, dispatch);
  return {
    actionFetchBook: fetchBook,
    actionFetchSaveBook: fetchSaveBook,
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Editor);
