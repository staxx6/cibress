package com.datpixelstudio.cibress.entity;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Objects;

@Entity
@Table(name = "day_entry_dish", schema = "cibress", catalog = "")
public class DayEntryDish {
    private int id;
    private LocalTime timeRecorded;
    private Integer quantityIngredient;
    private Unit unit;
    private DayEntry dayEntryByIdDayEntry;
    private Dish dish;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "time_recorded")
    public LocalTime getTimeRecorded() {
        return timeRecorded;
    }

    public void setTimeRecorded(LocalTime timeRecorded) {
        this.timeRecorded = timeRecorded;
    }

    @Basic
    @Column(name = "quantity_ingredient")
    public Integer getQuantityIngredient() {
        return quantityIngredient;
    }

    public void setQuantityIngredient(Integer quantityIngredient) {
        this.quantityIngredient = quantityIngredient;
    }

    @OneToOne
    @JoinColumn(name = "id_unit", referencedColumnName = "id")
    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    @ManyToOne
    @JoinColumn(name = "id_day_entry", referencedColumnName = "id", nullable = false)
    public DayEntry getDayEntryByIdDayEntry() {
        return dayEntryByIdDayEntry;
    }

    public void setDayEntryByIdDayEntry(DayEntry dayEntryByIdDayEntry) {
        this.dayEntryByIdDayEntry = dayEntryByIdDayEntry;
    }

    @ManyToOne
    @JoinColumn(name = "id_dish", referencedColumnName = "id")
    public Dish getDish() {
        return dish;
    }

    public void setDish(Dish dishByIdDish) {
        this.dish = dishByIdDish;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DayEntryDish that = (DayEntryDish) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "DayEntryDish{" +
                "id=" + id +
                ", timeRecorded=" + timeRecorded +
                ", quantityIngredient=" + quantityIngredient +
                ", unit='" + unit + '\'' +
                ", dayEntryByIdDayEntry=" + dayEntryByIdDayEntry +
                ", dish=" + dish +
                '}';
    }
}
