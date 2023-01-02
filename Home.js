//The welcome screen lists all the elevators that are not in operation and allows you to select one of them. When selecting an elevator from the list, the user is directed to a screen displaying the status of the selected elevator.
//Under the section in charge of displaying the list, a "Log Out" button redirects the user to the login screen.

<script src="http://localhost:8097"></script>;
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useTheme, Title, List } from "react-native-paper";

//The HomeScreen component is a functional component that displays a touchable card
// touchable card containing the title and content variables. When the
// touchable area is pressed, it uses the navigation prop to navigate to the
// "Details" screen and pass along the title and content as parameters.
function GetAllCards(props) {
  const theme = useTheme();
  const [data, setData] = useState([{ id: "1", status: "500" }]);

  useEffect(() => {
    axios
      .get("http://localhost:5287/api/elevator/intervention")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <View>
      {data.map((item, i) => {
        return (
          <TouchableOpacity
            onPress={() =>
              props.navigation?.push("Details", {
                item,
                i,
              })
            }
          >
            <List.Item
              left={() => (
                <>
                  <List.Icon color={theme.colors.primary} icon="rocket" />
                  <Title>{" Elevator: " + item.id}</Title>
                </>
              )}
              right={() => <Title>{item.model}</Title>}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default HomeScreen = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);
  const theme = useTheme();

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Intervention Elevators"
            left={() => (
              <List.Icon color={theme.colors.primary} icon="elevator" />
            )}
            id="1"
            expanded={expanded}
            onPress={handlePress}
          >
            <GetAllCards navigation={navigation} />
          </List.Accordion>
        </List.Section>
        {/* 
          <List.Subheader>Intervention Elevators</List.Subheader>
        */}
      </ScrollView>
    </View>
  );
};
