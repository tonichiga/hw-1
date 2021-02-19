import Profile from "./components/Profile";
import user from "./users/user.json";
import Statistics from "./components/Statistics";
import statistic from "./users/statistical-data.json";
import friends from "./users/friends-list.json";
import FriendsList from "./components/FriendsList";
import transactions from "./users/transactions.json";
import Transaction from "./components/Transaction";
const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Uploads data" statData={statistic} />
      <FriendsList data={friends} />
      <Transaction
        type={"type"}
        amount={"amount"}
        currency={"currency"}
        data={transactions}
      />
    </div>
  );
};

export default App;
