class GFG{
    public static void main(String args[])
    {
        ArrayList<String> a1 = new ArrayList<String>();
        a1.add("Geeks");
        a1.add("Geeks");
        System.out.println("original ArrayList: " + a1);
        a1.add(1, "for");
        System.out.println("After adding element at index 1: " + a1);
        a1.remove(0);
        System.out.println("After removing element at index 0: " + a1);
        a1.remove("Geeks");
        System.out.println("Element 'Geeks' removed: " + a1);
        a1.set(0, "GFG");
        System.out.println("List after updation of value: " + a1);
    }
}