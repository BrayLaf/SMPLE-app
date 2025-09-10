import { Pressable, Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/Smple-removebg-preview.png')} 
        style={styles.image}
      />
      <Text style={styles.welcomeText}>
        Welcome to a more simple way to workout
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.invertbuttonText}>Login</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.signUpButton]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    marginBottom: 20,
  },
  welcomeText: {
    marginBottom: 30,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffffffff", // iOS blue
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 9999, // pill shape
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    minWidth: 200, // keeps pill shape consistent
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#000000ff", // iOS green
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  invertbuttonText: {
    color: "#000000ff",
    fontSize: 16,
    fontWeight: "600",
  },
});
