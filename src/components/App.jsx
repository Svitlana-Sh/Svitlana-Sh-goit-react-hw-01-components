import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendLists } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from "./Global-style";
import { Layout, LayoutFirst } from './Layout';

import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

export const App = () => {
  return (
  <Layout>
  <LayoutFirst>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendLists friends={friends} />
  </LayoutFirst>
      <TransactionHistory items={transactions} />
      <GlobalStyle />
  </Layout>
  );
};
