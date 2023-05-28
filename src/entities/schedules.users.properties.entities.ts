import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Property from "./properties.entities";
import User from "./user.entity";

@Entity("schedules_users_properties")
class UserToProperty {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Property, (property) => property.userToProperty)
  property: Property;

  @ManyToOne(() => User, (user) => user.userToCategory)
  user: User;
}

export default UserToProperty;
