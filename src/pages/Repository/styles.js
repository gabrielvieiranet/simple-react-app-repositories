import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
<<<<<<< HEAD
    width: 120px;
=======
    max-width: 120px;
    max-height: 120px;
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
<<<<<<< HEAD
  border-top: 1px solid #eee;
  list-style: none;
=======
  border-top: 1px solid #ddd;
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb

  li {
    display: flex;
    padding: 15px 10px;
<<<<<<< HEAD
    border: 1px solid #eee;
=======
    border: 1px solid #ddd;
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
<<<<<<< HEAD
      border: 2px solid #eee;
=======
      border: 2px solid #ddd;
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
<<<<<<< HEAD
          background: #eee;
=======
          background: #ddd;
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
