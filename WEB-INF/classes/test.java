import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
//import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Stack;

import pb.rest.jaxrs.vo.ResImage;

public class test {
	public static void main(String[] args) throws NoSuchFieldException,
			SecurityException, IllegalArgumentException, IllegalAccessException {
		ResImage img = new ResImage();

		// printViewStack(img);
		ViewStack vs = getViewStack(img);
		printViewStack(img);
		System.out.println(vs.type);
		System.out.println(vs.members.pop().data);
		DefaultWebPrinter.printViewStackForWeb(vs);

	}

	public static void printViewStack(Object o)
			throws IllegalArgumentException, IllegalAccessException {
		Field[] fields = o.getClass().getFields();

		for (Field one : fields) {
			if (one.getModifiers() == Modifier.PUBLIC) {

				// System.out.println(one.getDeclaringClass().getSimpleName());
				System.out.println(one.getType().getSimpleName());
				System.out.println(one.getName());
				System.out.println(one.get(o));
				System.out.println("");
			}

		}
	}

	public static ViewStack getViewStack(Object o)
			throws IllegalArgumentException, IllegalAccessException {

		Field[] fields = o.getClass().getFields();
		ViewStack result = new ViewStack(o.getClass().getName());

		Field one;
		for (int i = 0; i < fields.length; i++) {
			one = fields[i];
			if (one.getModifiers() == Modifier.PUBLIC) {
				result.members.add(new ViewEntry(one.getType().getSimpleName(),
						one.getName(), one.get(o)));
			}
		}
		return result;
	}

}

class ViewStack {
	public String type;
	public Stack<ViewEntry> members;

	ViewStack(String type) {
		this.type = type;
		this.members = new Stack<ViewEntry>();
	}
}

class ViewEntry {
	String type;
	String name;
	String data;

	public ViewEntry(String type, String name, Object data) {
		this.type = type;
		this.name = name;
		this.data = ((data==null) ? "null" : data.toString());
	}
}

class DefaultWebPrinter{
	public static String printViewStackForWeb(ViewStack stack){
		//ArrayList<String> resultMembers = new ArrayList<String>();
		HashMap<String,String> defaultMap = new HashMap<String, String>();
		defaultMap.put("int", "<label for=\"^n\">^n</label><input type=\"text\" name=\"^n\" id=\"^n\" value=\"^d\"></input>");
		defaultMap.put("String", "<label for=\"^n\">^n</label><input type=\"text\" name=\"^n\" id=\"^n\" value=\"^d\"></input>");
		defaultMap.put("long", "<label for=\"^n\">^n</label><input type=\"text\" name=\"^n\" id=\"^n\" value=\"^d\"></input>");
		
		
		
		Iterator<ViewEntry> iter = stack.members.iterator();
		ViewEntry e = null;
		while(iter.hasNext()){
			e = iter.next();
			if(defaultMap.containsKey(e.type)){
				String tmp = defaultMap.get(e.type);
				tmp = tmp.replaceAll("\\^n", e.name);
				tmp = tmp.replaceAll("\\^d", e.data);
				
				System.out.println(tmp);
				/*
				System.out.println(
					String.format(defaultMap.get(e.type), e.name)
				);
				*/
			} else {
				System.err.println(
					String.format("%s에 대한 변경룰이 없습니다. ( %s, %s )", e.type, e.name, e.data)
				);
			}
		}
			
		
		
		
		//System.out.println()
		
		return "";
	}	
}